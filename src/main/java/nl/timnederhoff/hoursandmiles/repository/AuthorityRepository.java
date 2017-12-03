package nl.timnederhoff.hoursandmiles.repository;

import nl.timnederhoff.hoursandmiles.domain.Authority;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Authority entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {
}
