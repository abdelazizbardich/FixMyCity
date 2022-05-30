package com.abdelaziz.fixmycity.Controllers;

import com.abdelaziz.fixmycity.Models.Photo;
import com.abdelaziz.fixmycity.Services.PhotoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/photo")
public class PhotoController {

    private PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping("")
    public ResponseEntity<List<Photo>> getAll(){
        List<Photo> photos = photoService.getAll();
        return ResponseEntity.ok().body(photos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Photo>> get(@PathVariable(name = "id") Long id){
        return ResponseEntity.ok().body(photoService.findById(id));
    }

    @PostMapping("")
    public ResponseEntity<Photo> add(@RequestBody Photo photo){
        return ResponseEntity.ok().body(photoService.addOrUpdate(photo));
    }

    @PutMapping("")
    public ResponseEntity<Photo> update(@RequestBody Photo photo){
        return ResponseEntity.ok().body(photoService.addOrUpdate(photo));
    }

    @DeleteMapping("")
    public ResponseEntity<Boolean> delete(Photo photo){
        return ResponseEntity.ok().body(photoService.delete(photo));
    }
}
