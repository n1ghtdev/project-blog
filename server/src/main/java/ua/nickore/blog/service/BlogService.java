package ua.nickore.blog.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ua.nickore.blog.model.Note;
import ua.nickore.blog.repository.NoteRepository;

@Service
public class BlogService {

  @Autowired
  private NoteRepository noteRepository;

  public List<Note> getAllNotes() {
    List<Note> notes = new ArrayList<>();

    noteRepository.findAll()
    .forEach(notes::add);

    return notes;
  };

  public Note getNote(Long id) {
    return noteRepository.findById(id).orElse(null);
  }

  public void addNote(Note note) {
    noteRepository.save(note);
  }

  public void updateNote(Note note) {
    noteRepository.save(note);
  }

  public void deleteNote(Long id) {
    noteRepository.deleteById(id);
  }

}