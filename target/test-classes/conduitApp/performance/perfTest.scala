package performance

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import scala.concurrent.duration._

class perfTest extends Simulation {

  val protocol = karateProtocol(
    "/api/articles/{articleId}" -> Nil
  )

  // protocol.nameResolver = (req, ctx) => req.getHeader("karate-name")
  protocol.runner.karateEnv("dev")

  val csvFeeder = csv("articles.csv").circular;
  val createArticle = scenario("create and delete article").feed(csvFeeder).exec(karateFeature("classpath:conduitApp/performance/createArticle.feature"))

  setUp(
    createArticle.inject(
      atOnceUsers(1),
      nothingFor(4),
      constantUsersPerSec(1).during(2 seconds)
      // constantUsersPerSec(2).during(10 seconds),
      // rampUsersPerSec(2).to(10).during(20 seconds),
      // nothingFor(5),
      // constantUsersPerSec(1).during(5 seconds)
      ).protocols(protocol)
  )

}