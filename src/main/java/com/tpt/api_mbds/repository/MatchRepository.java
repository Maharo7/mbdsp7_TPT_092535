package com.tpt.api_mbds.repository;

import com.tpt.api_mbds.model.Match;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MatchRepository extends MongoRepository<Match, String> {
    List<Match> findMatchByEtatContaining(String etat);
    List<Match> findMatchByEquipe1_Id(String id);
    List<Match> findMatchByEquipe2_Id(String id);
}
