package main.spring.login.jwt;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.Value;
import main.spring.login.entity.Authority;
import main.spring.login.security.JpaUserDetailsService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@Component
public class JwtProvider {

    @Value("${jwt.secret.key}")
    private String salt;

    private Key secretKey;

    private final long exp = 1000L * 60 * 60;
    private final JpaUserDetailsService userDetailsService;

    @PostConstruct
    protected void init() {

        secretKey = Keys.hmacShaKeyFor(salt.getBytes(StandardCharsets.UTF_8));
    }

    // 토큰 생성 코드
    public String createToken(String account, List<Authority> roles)
    {
         Claims claims = Jwts.claims().setSubject(account).build();
         claims.put("roles", roles);
         Date now = new Date();
         return Jwts.builder()
                 .setClaims(claims)
                 .setIssuedAt(now)
                 .setExpiration(new Date(now.getTime() + exp))
                 .signWith(secretKey, SignatureAlgorithm.HS256)
                 .compact();

    }

    // 권한 정보 획득
    // Spring Security 인증과정에서 권한 확인을 위한 기능
    public Authentication getAuthentication(String token){

        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getAccount(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());

    }

    public String getAccount(String token){
        return Jwts.parser().setSigningKey(secretKey).build().parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveToken(HttpServletRequest request)
    {
        return request.getHeader("Authorization");

    }

    public boolean validateToken( String token) {
        try {
            // Bearer 검증
            if (!token.substring(0, "BEARER".length()).equalsIgnoreCase("BEARER")) {
                return false;
            } else {
                token = token.split(" ")[1].trim();
            }

            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).build().parseClaimsJws(token);

            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }

    }
}
