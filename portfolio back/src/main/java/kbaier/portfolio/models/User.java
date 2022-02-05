package kbaier.portfolio.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="users")
public class User {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id ;
    private String name;
    @Column(unique=true)
    private String email;
    private String picture;
    private String about;
    private int age;
    private String address;
    private String Motivation;

    /*association*/
    @OneToMany(mappedBy="user",cascade= CascadeType.ALL)
    private List<Education> educations;

    @OneToMany(mappedBy="user",cascade= CascadeType.ALL)
    private List<Languages> languages;

    @OneToMany(mappedBy="user",cascade= CascadeType.ALL)
    private List<Experience> experiences;

    @OneToMany(mappedBy="user",cascade= CascadeType.ALL)
    private List<Links> links;

    @OneToMany(mappedBy="users",cascade= CascadeType.ALL)
    private List<Skills> skills;

}
