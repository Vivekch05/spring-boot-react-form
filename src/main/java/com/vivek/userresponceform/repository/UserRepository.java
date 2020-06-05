package com.vivek.userresponceform.repository;

import com.vivek.userresponceform.model.UserModel;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel,Integer>
{
    
}