import os
from playwright.sync_api import sync_playwright

def verify(page):
    # 1. Welcome
    print("Navigating to /")
    page.goto("http://localhost:3000/")
    page.screenshot(path="verification/01_welcome.png")

    # 2. Login
    print("Navigating to /login")
    page.goto("http://localhost:3000/login")
    page.screenshot(path="verification/02_login.png")

    # 3. Register
    print("Navigating to /register")
    page.goto("http://localhost:3000/register")
    page.screenshot(path="verification/03_register.png")

    # 4. Home
    print("Navigating to /home")
    page.goto("http://localhost:3000/home")
    page.screenshot(path="verification/04_home.png")

    # 5. Categories
    print("Navigating to /categories")
    page.goto("http://localhost:3000/categories")
    page.screenshot(path="verification/05_categories.png")

    # 6. Product Orange
    print("Navigating to /product/1")
    page.goto("http://localhost:3000/product/1")
    page.screenshot(path="verification/06_product_orange.png")

    # 7. Product Green
    print("Navigating to /product/2")
    page.goto("http://localhost:3000/product/2")
    page.screenshot(path="verification/07_product_green.png")

    # 8. Cart
    print("Navigating to /cart")
    page.goto("http://localhost:3000/cart")
    page.screenshot(path="verification/08_cart.png")

    # 9. Checkout
    print("Navigating to /checkout")
    page.goto("http://localhost:3000/checkout")
    page.screenshot(path="verification/09_checkout.png")

    # 10. Confirmation
    print("Navigating to /confirmation")
    page.goto("http://localhost:3000/confirmation")
    page.screenshot(path="verification/10_confirmation.png")

    # 11. Profile
    print("Navigating to /profile")
    page.goto("http://localhost:3000/profile")
    page.screenshot(path="verification/11_profile.png")

    # 12. Favorites
    print("Navigating to /favorites")
    page.goto("http://localhost:3000/favorites")
    page.screenshot(path="verification/12_favorites.png")

    # 13. Community
    print("Navigating to /community")
    page.goto("http://localhost:3000/community")
    page.screenshot(path="verification/13_community.png")

if __name__ == "__main__":
    if not os.path.exists("verification"):
        os.makedirs("verification")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            verify(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()
