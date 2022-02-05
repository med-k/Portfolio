package kbaier.portfolio.services;

import kbaier.portfolio.models.User;
import kbaier.portfolio.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserService implements IUserService{
    private final UserRepo userRepo;
    @Override
    public User getUserById(int id) {
        log.info("get user by id : {}",id);
        return userRepo.findById(id).get();
    }
}
