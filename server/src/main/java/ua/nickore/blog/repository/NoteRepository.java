package ua.nickore.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ua.nickore.blog.model.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {
  List<Note> findByCategoryId(Long categoryId);
}