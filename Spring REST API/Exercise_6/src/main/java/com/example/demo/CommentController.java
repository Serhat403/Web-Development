package com.example.demo;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.*;
/*
das ist ein Kommentar für den Herrn Professor:
Herr Professor ich bin mir nicht sicher ob ich die Übungsangabe richtig verstanden habe
deswegen mache ich die Übung jetzt so wie ich es mir denke
also ich stelle es mir so dass wir Id´s mitgeben und
diesen id´s weisen wir listen mit kommentaren zu
und wir sollen mit get und post jedesmal die id mit geben und den jeweiligen kommentar holen ich
werde screenshots von den thunderclients mit geben
 */
@RestController
@RequestMapping("/comment")
public class CommentController {
    
    private HashMap<Integer,List<Comment>> counters = new HashMap<>();
    List<Comment> myList = new LinkedList<>();

    /*Comment comm1 = new Comment("hallo1", "welt1");
    Comment comm2 = new Comment("hallo2", "welt2");
    Comment comm3 = new Comment("hallo3", "welt3");
    Comment comm4 = new Comment("hallo4", "welt4");*/

    @RequestMapping(value ="/add/{listID}", method = RequestMethod.POST)
    public void updateValue(@RequestBody Comment msg, @PathVariable("listID") int id ){
            List<Comment> c = counters.getOrDefault(id, new LinkedList<>());
            c.add(msg);
            counters.put(id,c);
    }


    @RequestMapping(value = "/all/{listID}", method = RequestMethod.GET)
    public List<Comment> getValue(@PathVariable("listID") int id){
        return counters.getOrDefault(id,new LinkedList<Comment>());
    }

    
    @RequestMapping(value = "/clear/{listId}", method = RequestMethod.POST)
    public void clearValue(@PathVariable("listId") int id){
        List<Comment> c = counters.getOrDefault(id, new LinkedList<>());
        c.clear();
        counters.put(id,c);
    }

    /**
     * dieser code unten mit dem input hat nicht funktioniert deswegen habe ich den mit
     * pathvariable genommen
     */


    /*
    @RequestMapping(value = "/clear/{listID}", method = RequestMethod.POST)
    public void clearValue(@RequestBody int listID) {
        List<Comment> c = counters.getOrDefault(listID, new LinkedList<>());
        c.clear();
        counters.put(listID, c);
    }
    */

}
