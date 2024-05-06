package main.spring.login.mainlogin4.controller;


import main.spring.login.mainlogin4.dto.GoogleInfResponse;
import main.spring.login.mainlogin4.dto.GoogleRequest;
import main.spring.login.mainlogin4.dto.GoogleResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.view.RedirectView;

import java.util.HashMap;
import java.util.Map;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

@RestController
@CrossOrigin("*")
public class NewLoginController {

    @Value("${google.client.id}")
    private String googleClientId;
    @Value("${google.client.pw}")
    private String googleClientPw;
    RedirectView redirectView = new RedirectView();

    @RequestMapping(value="/api/v1/oauth2/google", method = RequestMethod.POST)
    public String loginUrlGoogle(){
        String reqUrl = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + googleClientId
                + "&redirect_uri=http://ec2-13-209-231-193.ap-northeast-2.compute.amazonaws.com:8079/api/v1/oauth2/google&response_type=code&scope=email%20profile%20openid&access_type=offline";
        return reqUrl;
    }

    @RequestMapping(value="/api/v1/oauth2/google", method = RequestMethod.GET)
    public RedirectView loginGoogle(@RequestParam(value = "code") String authCode){
        RestTemplate restTemplate = new RestTemplate();
        GoogleRequest googleOAuthRequestParam = GoogleRequest
                .builder()
                .clientId(googleClientId)
                .clientSecret(googleClientPw)
                .code(authCode)
                .redirectUri("http://ec2-13-209-231-193.ap-northeast-2.compute.amazonaws.com:8079/api/v1/oauth2/google")
                .grantType("authorization_code").build();
        ResponseEntity<GoogleResponse> resultEntity = restTemplate.postForEntity("https://oauth2.googleapis.com/token",
                googleOAuthRequestParam, GoogleResponse.class);
        String jwtToken=resultEntity.getBody().getId_token();
        Map<String, String> map=new HashMap<>();
        map.put("id_token",jwtToken);
        ResponseEntity<GoogleInfResponse> resultEntity2 = restTemplate.postForEntity("https://oauth2.googleapis.com/tokeninfo",
                map, GoogleInfResponse.class);
        String email=resultEntity2.getBody().getEmail();

        // JDBC를 사용하여 데이터베이스에 email 저장
        saveEmailToDatabase(email);


        RedirectView redirectView = new RedirectView();
        redirectView.setUrl("http://easyoms.store/login/?code=" + email);
        return redirectView;


    }

    private void saveEmailToDatabase(String email) {
        Connection connection = null;
        PreparedStatement preparedStatement = null;

        try {
            // JDBC 드라이버 로딩
            Class.forName("org.mariadb.jdbc.Driver");

            // 데이터베이스 연결
            connection = DriverManager.getConnection("jdbc:mariadb://172.31.9.120:3307/oms", "root", "1234");

            // SQL 쿼리 작성
            String sql = "INSERT INTO UserEntity (username, role) VALUES (?, ?)";

            // PreparedStatement 생성
            preparedStatement = connection.prepareStatement(sql);

            // 파라미터 설정
            preparedStatement.setString(1, email);
            preparedStatement.setString(2, "ROLE_ADMIN");

            // 쿼리 실행
            preparedStatement.executeUpdate();
        } catch (ClassNotFoundException | SQLException e) {
            e.printStackTrace();
        } finally {
            // 리소스 정리
            try {
                if (preparedStatement != null) {
                    preparedStatement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
