package ua.nickore.blog.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import ua.nickore.blog.model.BlogNote;

@Service
public class BlogService {

  private List<BlogNote> notes = new ArrayList<>(Arrays.asList(
    new BlogNote("first", "First note", "First note done with SpringBoot + Maven"),
    new BlogNote("second", "Second note", "Second note done with SpringBoot + Maven"),
    new BlogNote("third", "3rd note", "Helloy")
  ));

  public List<BlogNote> getAllNotes() {
    return notes;
  };

  public BlogNote getNote(String id) {
    return notes.stream().filter(t -> t.getId().equals(id)).findFirst().get();
  }

  public void addNote(BlogNote note) {
    notes.add(note);
  }

}