package runCukes.calenderPricing;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import java.io.IOException;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/CalenderPricingTest",
                "json:target/html-reports/CalenderPricing.json"},
        features = {"src/main/resources/features/CalenderPricing.feature"},
        glue = {"com.tajawal.step.definition","com.tajawal.utils"},
        tags = {"@TC_CalenderPricing"}
)
public class CalenderPricingTest {
}
