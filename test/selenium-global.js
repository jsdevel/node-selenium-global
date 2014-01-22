describe("selenium-global", function(){
  it("exports Selenium objects to global", function(){
    driver.get('http://google.com');
  });

  it("allows us to forget about setup", function(){
    driver.findElements(By.name('q')).length.should.equal(1);
  });

  before(function(){
    driver = new ChromeDriver;
  });

  after(function(){
    driver.quit();
  });

  var driver;
});
