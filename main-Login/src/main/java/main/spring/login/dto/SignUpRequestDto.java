package main.spring.login.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpRequestDto {

    private String memberName;
    private String password;
    private String role;


}
