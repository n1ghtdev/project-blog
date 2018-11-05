package ua.nickore.blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ua.nickore.blog.model.BlogNote;

public interface NoteRepository extends JpaRepository<BlogNote, Long> {
  List<BlogNote> findByCategoryId(Long categoryId);
}