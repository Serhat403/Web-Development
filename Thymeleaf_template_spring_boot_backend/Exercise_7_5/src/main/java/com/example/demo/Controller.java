package com.example.demo;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@org.springframework.stereotype.Controller
@RequestMapping("/Comment")
/**
 * für einmal posten braucht man session
 */
@SessionAttributes(value = "lastComment")
public class Controller {

    ArrayList<Comment> mylist = new ArrayList<>();

    /*
    this like a list of Comments
    1) one controller methodss
    2) two Controleler methods
     */
    int zahl = 0;


    @RequestMapping("/tl/form")
    public String tForm(@ModelAttribute Comment a, Model model){
        //handle form input here
        //model.addAttribute("Comment",new Comment());
        //model.addAttribute("lastComment", Arrays.asList(new Comment("hallo","welt"),new Comment("welt","hallo")));
        //List<Comment> mylist = Arrays.asList();
        //model.addAttribute("lastComment", Arrays.asList(new Comment("hallo", "welt"),a, new Comment("welt ", "hallo")));
        //List<Comment> mylist = Arrays.asList();
        //model.addAttribute("a", mylist.add(a));
        model.addAttribute("Comment", a);
        model.addAttribute("lastComment", mylist);
        model.addAttribute("zahl", zahl);
        //>=3

        if(mylist.size()>=2){
            return "exercise2";
        }
        else{
            zahl++;
            mylist.add(a);
            return "exercise2";
        }
 }






    /*
    @RequestMapping("/tl/card")
    public String tIndex(@ModelAttribute Comment a, Model model){
        //handle form input here
        model.addAttribute("Comment",new Comment("hallo","welt"));
        return "cardComment";
    }*/


    /*
    @RequestMapping("/tl/card")
    public String tGet(@ModelAttribute Comment a, Model model){
        model.addAttribute("Comment",new Comment(a.getName(),a.getText()));
        return "cardComment";
    }*/


}
