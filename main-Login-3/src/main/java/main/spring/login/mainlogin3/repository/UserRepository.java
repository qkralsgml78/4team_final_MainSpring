package main.spring.login.mainlogin3.repository;

import main.spring.login.mainlogin3.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.net.InterfaceAddress;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Boolean existsByUsername(String username);

    //username을 받아 DB 테이블에서 회원을 조회하는 메소드 작성
    UserEntity findByUsername(String username);

}
