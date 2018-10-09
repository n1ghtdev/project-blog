package ua.nickore.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ua.nickore.blog.model.BlogNote;
import ua.nickore.blog.service.BlogService;


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
  
}