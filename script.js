// mennan@noktabilisim.net
// info@noktabilisim.net

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  lucide.createIcons();

  // 2. Header Scroll Effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 3. Mobile Menu Toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenuButton) {
    const mobileMenuIcon = mobileMenuButton.querySelector("i");
    mobileMenuButton.addEventListener("click", () => {
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      if (isOpen) {
        mobileMenuIcon.setAttribute("data-lucide", "menu");
      } else {
        mobileMenuIcon.setAttribute("data-lucide", "x");
      }
      lucide.createIcons(); // Re-render icons
    });
  }

  // 4. Mobile Services Dropdown Toggle
  const mobileServicesButton = document.getElementById(
    "mobile-services-button"
  );
  const mobileServicesDropdown = document.getElementById(
    "mobile-services-dropdown"
  );
  if (mobileServicesButton) {
    const mobileServicesIcon = mobileServicesButton.querySelector("i");
    mobileServicesButton.addEventListener("click", () => {
      const isOpen = !mobileServicesDropdown.classList.contains("hidden");
      mobileServicesDropdown.classList.toggle("hidden");
      mobileServicesIcon.style.transform = isOpen
        ? "rotate(0deg)"
        : "rotate(180deg)";
    });
  }

  // 5. Intersection Observer for Animations (Fade-in & Count-up)
  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Fade-in animation
        if (entry.target.classList.contains("fade-in-section")) {
          entry.target.classList.add("is-visible");
        }

        // Count-up animation
        if (entry.target.classList.contains("count-up")) {
          const endValue = parseInt(
            entry.target.getAttribute("data-end-value"),
            10
          );
          const duration = 2000; // 2 seconds
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            entry.target.textContent = Math.floor(progress * endValue);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }

        observer.unobserve(entry.target);
      }
    });
  };

  const animationObserver = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1,
  });

  const elementsToAnimate = document.querySelectorAll(
    ".fade-in-section, .count-up"
  );
  elementsToAnimate.forEach((el) => {
    animationObserver.observe(el);
  });

  // 6. Brands Carousel
  const brands = [
    {
      name: "Acronis",
      logoUrl: "./images/business-partners/noktabilisim-acronis.png",
    },
    {
      name: "SoftExpert",
      logoUrl: "./images/business-partners/noktabilisim-softexpert.png",
    },
    {
      name: "Hikvision",
      logoUrl: "./images/business-partners/noktabilisim-hikvision.png",
    },
    {
      name: "Adobe",
      logoUrl: "./images/business-partners/noktabilisim-adobe.png",
    },
    {
      name: "Honeywell",
      logoUrl: "./images/business-partners/noktabilisim-honeywell.png",
    },
    {
      name: "AMD",
      logoUrl: "./images/business-partners/noktabilisim-amd.png",
    },
    {
      name: "Fortinet",
      logoUrl: "./images/business-partners/noktabilisim-fortinet.png",
    },
    {
      name: "Aruba",
      logoUrl: "./images/business-partners/noktabilisim-aruba.png",
    },
    {
      name: "Trellix",
      logoUrl: "./images/business-partners/noktabilisim-trellix.png",
    },
    {
      name: "Aten",
      logoUrl: "./images/business-partners/noktabilisim-aten.png",
    },
    {
      name: "Veeam",
      logoUrl: "./images/business-partners/noktabilisim-veeam.png",
    },
    {
      name: "Cisco",
      logoUrl: "./images/business-partners/noktabilisim-cisco.png",
    },
    {
      name: "Dell",
      logoUrl: "./images/business-partners/noktabilisim-dell.png",
    },
    {
      name: "Dell Tech",
      logoUrl: "./images/business-partners/noktabilisim-delltech.png",
    },
    {
      name: "Intel",
      logoUrl: "./images/business-partners/noktabilisim-intel.png",
    },
    {
      name: "HP",
      logoUrl: "./images/business-partners/noktabilisim-hp.png",
    },
    {
      name: "Millestone",
      logoUrl: "./images/business-partners/noktabilisim-milestone.png",
    },
    {
      name: "LG",
      logoUrl: "./images/business-partners/noktabilisim-lg.png",
    },
    {
      name: "NVIDIA",
      logoUrl: "./images/business-partners/noktabilisim-nvidia.png",
    },
    {
      name: "Emerson",
      logoUrl: "./images/business-partners/noktabilisim-emerson.png",
    },
    {
      name: "Hewlett",
      logoUrl: "./images/business-partners/noktabilisim-hewlett.png",
    },
    {
      name: "Eset",
      logoUrl: "./images/business-partners/noktabilisim-eset.png",
    },
    { name: "F5", logoUrl: "./images/business-partners/noktabilisim-f5.png" },
    {
      name: "Juniper",
      logoUrl: "./images/business-partners/noktabilisim-juniper.png",
    },
    {
      name: "Lenovo",
      logoUrl: "./images/business-partners/noktabilisim-lenovo.jpg",
    },
    {
      name: "Linux",
      logoUrl: "./images/business-partners/noktabilisim-linux.png",
    },
    {
      name: "Logo Netsis",
      logoUrl: "./images/business-partners/noktabilisim-logo_netsis.jpg",
    },
    {
      name: "MCafee",
      logoUrl: "./images/business-partners/noktabilisim-mcafee.png",
    },
    {
      name: "Meta",
      logoUrl: "./images/business-partners/noktabilisim-meta.png",
    },
    {
      name: "Microsoft",
      logoUrl: "./images/business-partners/noktabilisim-microsoft.png",
    },
    {
      name: "Monster",
      logoUrl: "./images/business-partners/noktabilisim-monster.png",
    },
    {
      name: "Oracle",
      logoUrl: "./images/business-partners/noktabilisim-oracle.png",
    },
    {
      name: "Pelco",
      logoUrl: "./images/business-partners/noktabilisim-pelco.png",
    },
    {
      name: "Samsung",
      logoUrl: "./images/business-partners/noktabilisim-samsung.png",
    },
    {
      name: "Seagate Technology",
      logoUrl: "./images/business-partners/noktabilisim-seagate_technology.png",
    },
    { name: "Sun", logoUrl: "./images/business-partners/noktabilisim-sun.png" },
    {
      name: "Techno PC",
      logoUrl: "./images/business-partners/noktabilisim-technopc.jpg",
    },
    {
      name: "VMware",
      logoUrl: "./images/business-partners/noktabilisim-vmware.png",
    },
    {
      name: "Wyse",
      logoUrl: "./images/business-partners/noktabilisim-wyse.png",
    },
    {
      name: "Zebra",
      logoUrl: "./images/business-partners/noktabilisim-zebra.png",
    },
    {
      name: "Zyxel",
      logoUrl: "./images/business-partners/noktabilisim-zyxel.png",
    },
  ];

  const carousel = document.querySelector(".animate-infinite-scroll");
  if (carousel) {
    const allBrands = [...brands, ...brands]; // Duplicate for seamless loop

    // Explicitly set the width of the carousel
    const logoW64 = 256; // Corresponds to w-64 in Tailwind
    const marginX4 = 32; // Corresponds to mx-4 in Tailwind (1rem * 2)
    const logoWidth = logoW64 + marginX4;
    carousel.style.width = `${allBrands.length * logoWidth}px`;

    allBrands.forEach((brand) => {
      const div = document.createElement("div");
      div.className = "flex-shrink-0 flex items-center justify-center";
      div.style.width = `${logoW64}px`;
      div.style.margin = `0 ${marginX4 / 2}px`;
      div.title = brand.name;
      const img = document.createElement("img");
      img.src = brand.logoUrl;
      img.alt = brand.name;
      img.className =
        "h-[140px] max-w-full object-contain filter transition-all duration-300 ease-in-out";
      div.appendChild(img);
      carousel.appendChild(div);
    });
  }

  // 7. Set Current Year in Footer
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 8. Contact Form Submission
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const form = e.target;
      const name = form.querySelector("#name").value;
      const email = form.querySelector("#email").value;
      const subject = form.querySelector("#subject").value;
      const message = form.querySelector("#message").value;

      const mailtoLink = `mailto:info@noktabilisim.net?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(
        "Ad Soyad: " + name + "\n\nE-posta: " + email + "\n\nMesaj:\n" + message
      )}`;

      // Attempt to open mail client
      window.location.href = mailtoLink;

      // Show success message and clear form
      // This happens immediately and doesn't wait for the email to be sent
      successMessage.classList.remove("hidden");
      form.reset();

      // Hide the success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.add("hidden");
      }, 5000);
    });
  }
});
