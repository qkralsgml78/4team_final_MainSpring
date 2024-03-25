package main.spring.login.demo2.entity;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Contact {

    @Id
    @Column(name = "contact_code", nullable = false)
    private String contactCode;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "company_code")
//    //@JoinColumn(name = "company_code")
//    private Company company;

    @Column(name = "contact_delimiter", nullable = false)
    private String contactDelimiter;

    @Column(name = "contact_name", nullable = false)
    private String contactName;

    @Column(name = "contact_address", nullable = false)
    private String contactAddress;

    @Column(name = "customer_password", nullable = true)
    private String customer_password;

    @Column(name = "storage_code")
    private String storageCode;

    @Column(name = "business_id")
    private String businessId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "storage_code", referencedColumnName = "contact_code", insertable = false, updatable = false)
    private Contact storageContact;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "business_id", referencedColumnName = "business_id", insertable = false, updatable = false)
    private Business business;




//    @ManyToOne
//    @JoinColumn(name = "business_code2", referencedColumnName = "business_code")
//    private Business business;

}
