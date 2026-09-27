(function () {
  "use strict";

  /*
   * Week 3 accessibility enhancement:
   * Mobile navigation is controlled with a native button.
   * ARIA state is synchronized with the visible menu.
   */

  var menuButton = document.querySelector(".menu-toggle");
  var navigation = document.getElementById("primary-navigation");

  if (!menuButton || !navigation) {
    console.warn("Mobile navigation elements were not found.");
    return;
  }

  function setMenu(open) {
    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  }

  menuButton.addEventListener("click", function () {
    var isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  /*
   * Close the mobile menu after a navigation link is activated.
   * This is useful for keyboard and touch users.
   */
  var links = navigation.querySelectorAll("a");

  for (var i = 0; i < links.length; i += 1) {
    links[i].addEventListener("click", function () {
      setMenu(false);
    });
  }

  /*
   * Escape provides a predictable way for keyboard users to close
   * the expanded mobile navigation.
   */
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      var isOpen = menuButton.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        setMenu(false);
        menuButton.focus();
      }
    }
  });

  /*
   * If the viewport becomes wide again, remove the mobile-only state.
   */
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
      setMenu(false);
    }
  });
})();
