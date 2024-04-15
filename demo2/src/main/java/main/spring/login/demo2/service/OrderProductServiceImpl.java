package main.spring.login.demo2.service;

import main.spring.login.demo2.entity.OrderProduct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderProductServiceImpl implements OrderProductService{
    @Autowired
    private OrderProductRepository orderProductRepository;

    @Override
    public List<OrderProduct> getOrderProductsByOrderNumber(Integer orderNumber){
        return orderProductRepository.findByOrderNumber(orderNumber);
    }
}
