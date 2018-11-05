package ua.nickore.blog.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.nickore.blog.model.BlogNote;
import ua.nickore.blog.repository.NoteRepository;

@Service
public class BlogService {

  @Autowired
  private NoteRepository noteRepository;

  public List<BlogNote> getAllNotes() {
    List<BlogNote> notes = new ArrayList<>();

    noteRepository.findAll()
    .forEach(notes::add);

    return notes;
  };

  public BlogNote getNote(Long id) {
    return noteRepository.findById(id).orElse(null);
  }

  public void addNote(BlogNote note) {
    noteRepository.save(note);
  }

  public void updateNote(BlogNote note) {
    noteRepository.save(note);
  }

  public void deleteNote(Long id) {
    noteRepository.deleteById(id);
  }

}