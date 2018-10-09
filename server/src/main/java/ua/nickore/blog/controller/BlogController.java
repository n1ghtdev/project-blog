package ua.nickore.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ua.nickore.blog.model.BlogNote;
import ua.nickore.blog.service.BlogService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class BlogController {

  @Autowired
  private BlogService blogService;

  @RequestMapping("/blog")
  public List<BlogNote> getAllNotes() {
    return blogService.getAllNotes();
  }

  @RequestMapping("/blog/{id}")
  public BlogNote getNote(@PathVariable String id) {
    return blogService.getNote(id);
  }

  @PostMapping(value="/blog", consumes = MediaType.APPLICATION_JSON_VALUE)
  public void addNote(@RequestBody BlogNote note) {
    blogService.addNote(note);
  }
  
}