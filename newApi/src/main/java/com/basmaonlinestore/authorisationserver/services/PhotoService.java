package com.basmaonlinestore.authorisationserver.services;

import com.basmaonlinestore.authorisationserver.models.Photo;
import com.basmaonlinestore.authorisationserver.repositories.PhotoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PhotoService {

    private PhotoRepository photoRepository;

    public PhotoService(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }

    public List<Photo> getAll(){
        return photoRepository.findAll();
    }

    public Optional<Photo> findById(Long id){
        return photoRepository.findById(id);
    }

    public Photo addOrUpdate(Photo photo){
        return photoRepository.save(photo);
    }

    public Boolean delete(Photo photo){
        try{
            photoRepository.delete(photo); return true;
        }catch (Exception e){
            return false;
        }
    }
}
