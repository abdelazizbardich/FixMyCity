package com.abdelazizbardich.fixmycity.Seeders;

import com.abdelazizbardich.fixmycity.models.Problem;
import com.abdelazizbardich.fixmycity.models.Report;
import com.abdelazizbardich.fixmycity.services.ProblemService;
import com.abdelazizbardich.fixmycity.services.ReportService;
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
            report.setLat("34.032109");
            report.setLan("-6.806705");
            report.setNote("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");
            report.setPhoto("https://api.lorem.space/image/house?w=1000&h=1000");
            List<Problem> problems = problemService.getAll();
            int rand = new Random().nextInt(problems.size());
            report.setProblem(problems.get(rand));
            report.setStatus(false);
            report.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            reportService.addOrUpdate(report);
        }
    }
}
