package ua.nickore.blog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import ua.nickore.blog.model.Category;
import ua.nickore.blog.repository.CatRepository;

@Service
public class CatService {
  
  @Autowired
  private CatRepository catRepository;

  public List<Category> getAllCategories() {
    // List<Category> categories = new ArrayList<>();
    
    // catRepository.findAll()
    // .forEach(categories::add);

    // return categories;
    return catRepository.findAll();
  }

  public Category getCategory(Long id) {
    return catRepository.findById(id).orElse(null);
  }

  public void addCategory(Category category) {
    catRepository.save(category);
  }

  public void updateCategory(Long id, String title) {
    catRepository.findById(id)
      .map(category -> {
        category.setName(title);
        return catRepository.save(category);
      });
  }

  public void deleteCategory(Long id) {
    catRepository.findById(id)
      .map(category -> {
        catRepository.delete(category);
        return ResponseEntity.ok().build();
      }).orElse(null);
  } 
}