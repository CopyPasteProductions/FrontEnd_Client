from selenium import webdriver
import os
import unittest

class NewVisitorTest(unittest.TestCase):  #1

    def setUp(self):  #2
        chromedriver = '/usr/local/chromedriver'
        os.environ["webdriver.chrome.driver"] = chromedriver
        self.browser = webdriver.Chrome(chromedriver)

    def tearDown(self):  #3
        self.browser.quit()

    def test_can_start_a_list_and_retrieve_it_later(self):  #4
        # Edith has heard about a cool new online to-do app. She goes
        # to check out its homepage
        self.browser.get('http://localhost:8000')

        # She notices the page title and header mention to-do lists
        self.assertIn('To-Do', self.browser.title)  #5
        self.fail('Finish the test!')  #6



if __name__ == '__main__':  #7
    unittest.main()  #8