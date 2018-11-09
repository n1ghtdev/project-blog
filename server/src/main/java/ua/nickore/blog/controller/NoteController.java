package ua.nickore.blog.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ua.nickore.blog.model.Note;
import ua.nickore.blog.service.BlogService;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class NoteController {

  @Autowired
  private BlogService blogService;

  @RequestMapping("/api/blog")
  public List<Note> getAllNotes() {
    return blogService.getAllNotes();
  }

  @RequestMapping("/api/blog/note/{id}")
  public Note getNote(@PathVariable Long id) {
    return blogService.getNote(id);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(path="/api/blog", method=RequestMethod.POST, produces = "application/json", consumes = MediaType.APPLICATION_JSON_VALUE)
  public Note addNote(@RequestBody Note note) {
    blogService.addNote(note);

    return new Note(note.getId(), note.getCategory(), note.getTitle(), note.getDescription()); // response to client
  }
  
}