package runCukes.regression;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/CalenderPricingTest",
                "json:target/html-reports/CalenderPricing.json"},
        features = {"src/main/resources/features/*.feature"},
        glue = {"com.tajawal.step.definition","com.tajawal.utils"},
        tags = {"@Regression"}
)
public class RegressionTest {
}
