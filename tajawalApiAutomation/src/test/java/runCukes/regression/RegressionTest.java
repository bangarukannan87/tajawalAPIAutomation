package runCukes.regression;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "html:target/html-reports/RegressionTest",
                "json:target/html-reports/RegressionTest.json"},
        features = {"src/main/resources/features/"},
        glue = {"com.tajawal.step.definition","com.tajawal.utils"},
        tags = {"@Regression"}
)
public class RegressionTest {
}
