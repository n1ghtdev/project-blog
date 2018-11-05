package ua.nickore.blog.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import ua.nickore.blog.model.Category;
import ua.nickore.blog.service.CatService;

@RestController
public class CatController {
  @Autowired
  CatService catService;

  @GetMapping("/blog")
  public List<Category> getAllCategories() {
    return catService.getAllCategories();
  }

  @PostMapping("/blog")
  public void createCategory(@Valid @RequestBody Category category) {
    catService.addCategory(category);
  }

  @PutMapping("/blog/{categoryId}")
  public void updateCategory(@PathVariable Long categoryId, @Valid @RequestBody Category categoryRequest) {
    catService.updateCategory(categoryId, categoryRequest.getName());
  }

  @DeleteMapping("/blog/{categoryId}")
  public void deleteCategory(@PathVariable Long categoryId) {
    catService.deleteCategory(categoryId);
  }
  
}