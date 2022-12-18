
package com.version2.web.vo.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.version2.web.vo.dto.UserDto;
import org.apache.ibatis.annotations.*;

@Mapper
public interface UserMapper {
	@Insert("INSERT INTO user VALUES (#{userId}, #{userPw}, #{userName}, #{userGender}, #{userEmail})")
	void insertUser(UserDto user);

	@Update("UPDATE user SET userPw = #{userPw}, userName = #{userName}, userGender = #{userGender}, userEmail = #{userEmail} WHERE userId = #{userId}")
	void updateUser(UserDto user);

	@Delete("DELETE FROM user WHERE userId = #{userId}")
	void deleteUser(String userId);

	@Select("SELECT * FROM user WHERE userId = #{userId}")
	UserDto selectOneUser(String userId);

	@Select("SELECT * FROM user")
	List<UserDto> selectAllUser();
}