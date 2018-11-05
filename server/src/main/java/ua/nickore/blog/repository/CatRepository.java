package ua.nickore.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ua.nickore.blog.model.Category;

public interface CatRepository extends JpaRepository<Category, Long> {

}