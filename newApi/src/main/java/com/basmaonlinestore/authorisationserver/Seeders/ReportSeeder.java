package com.basmaonlinestore.authorisationserver.Seeders;

import com.basmaonlinestore.authorisationserver.models.Problem;
import com.basmaonlinestore.authorisationserver.models.Report;
import com.basmaonlinestore.authorisationserver.services.ProblemService;
import com.basmaonlinestore.authorisationserver.services.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.List;
import java.util.Random;

@Component
@RequiredArgsConstructor
public class ReportSeeder {

    @Autowired
    private ReportService reportService;
    @Autowired
    private ProblemService problemService;



    public void Seed(int count){
        for (int i = 1;i<=count;i++){
            Report report = new Report();
            report.setLat("34,355435");
            report.setLan("54,332452");
            report.setNote("Somple note "+i);
            report.setPhoto("https://store-images.s-microsoft.com/image/apps.14591.9a19b1cb-7ffc-4b32-bf97-25ef75ec69a3.753de052-0f07-4e5e-a20d-e4d5688136af.e2247862-7caa-44e8-8915-ca934ab9b663.png");
            List<Problem> problems = problemService.getAll();
            int rand = new Random().nextInt(problems.size());
            report.setProblem(problems.get(rand));
            report.setStatus(false);
            report.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            reportService.addOrUpdate(report);
        }
    }
}
