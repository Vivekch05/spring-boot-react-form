package com.vivek.userresponceform.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import com.vivek.userresponceform.repository.UserRepository;
import com.vivek.userresponceform.model.UserModel;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.*;
@RestController
public class UserController {

    @Autowired
    UserRepository repo;

    @RequestMapping("/")
    @ResponseBody
    public ModelAndView home()
    {
        ModelAndView mv=new ModelAndView();
        mv.setViewName("index.html");
        return mv;
    }

    @RequestMapping("/addData")
    @ResponseBody
    public String userForm1(UserModel model)
    {
        repo.save(model);
        return "added";
    }

    @RequestMapping("/users")
    public List<UserModel> getData()
    {
        return repo.findAll();
    }

    @GetMapping("/user/{id}")
    public Optional<UserModel> getDataById(@PathVariable ("id") int id)
    {
        return repo.findById(id);
    }
    
    @DeleteMapping("/user/{id}")
    public String deleteDataById(@PathVariable ("id") int id)
    {
    //UserModel a=repo.getOne(id);
    repo.deleteById(id);
    return "deleted";
    }

    @DeleteMapping("/users")
    public String deleteDataAll()
    {
        repo.deleteAll();
        return "deleted all data";
    }

    @PutMapping("/user")
    public UserModel updateData(@RequestBody UserModel model)
    {
        repo.save(model);
        return model;
    }

}