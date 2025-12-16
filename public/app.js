// Global Navigation Function
function navigateTo(page) {
  window.location.href = page
}

// Initialize Demo Mode with Pre-seeded Data
function initializeDemoMode() {
  // Check if demo data already exists
  if (!localStorage.getItem("demoInitialized")) {
    console.log("[v0] Initializing demo mode with pre-seeded data")

    // Create 5 demo tutors
    const demoTutors = [
      {
        id: "tutor-1",
        username: "chidi_math",
        fullName: "Chidi Okafor",
        nin: "12345***890",
        bvn: "22345***890",
        verified: true,
        subjects: ["Mathematics", "Physics"],
        grade: "SS1-SS3",
        rating: 4.9,
        hourlyRate: 3500,
        location: { lat: 6.5244, lng: 3.3792, name: "Ikeja, Lagos" },
        walletBalance: 45000,
        escrowBalance: 7000,
        sessionsCompleted: 87,
        responseTime: "5 min",
        bio: "Mathematics and Physics specialist with 5+ years experience",
        mode: ["Home", "Online"],
      },
      {
        id: "tutor-2",
        username: "ada_english",
        fullName: "Ada Nnamdi",
        nin: "98765***210",
        bvn: "88765***210",
        verified: true,
        subjects: ["English", "Literature"],
        grade: "JSS1-SS3",
        rating: 4.8,
        hourlyRate: 3000,
        location: { lat: 6.4968, lng: 3.3879, name: "VI, Lagos" },
        walletBalance: 67000,
        escrowBalance: 6000,
        sessionsCompleted: 124,
        responseTime: "3 min",
        bio: "Passionate English and Literature teacher",
        mode: ["Home", "Online", "Hybrid"],
      },
      {
        id: "tutor-3",
        username: "emeka_chem",
        fullName: "Emeka Eze",
        nin: "45678***321",
        bvn: "55678***321",
        verified: true,
        subjects: ["Chemistry", "Biology"],
        grade: "JSS3-SS3",
        rating: 4.7,
        hourlyRate: 3200,
        location: { lat: 6.4541, lng: 3.3947, name: "Lekki, Lagos" },
        walletBalance: 52000,
        escrowBalance: 9600,
        sessionsCompleted: 93,
        responseTime: "10 min",
        bio: "Science educator specializing in Chemistry and Biology",
        mode: ["Home", "Online"],
      },
      {
        id: "tutor-4",
        username: "ngozi_further",
        fullName: "Ngozi Adewale",
        nin: "78912***654",
        bvn: "88912***654",
        verified: true,
        subjects: ["Further Mathematics", "Mathematics"],
        grade: "SS1-SS3",
        rating: 4.9,
        hourlyRate: 4000,
        location: { lat: 6.5355, lng: 3.3512, name: "Yaba, Lagos" },
        walletBalance: 89000,
        escrowBalance: 12000,
        sessionsCompleted: 156,
        responseTime: "2 min",
        bio: "Expert in advanced mathematics and problem-solving",
        mode: ["Home", "Online", "Hybrid"],
      },
      {
        id: "tutor-5",
        username: "tunde_physics",
        fullName: "Tunde Balogun",
        nin: "32165***987",
        bvn: "42165***987",
        verified: true,
        subjects: ["Physics", "Mathematics"],
        grade: "JSS1-SS3",
        rating: 4.6,
        hourlyRate: 3300,
        location: { lat: 6.5568, lng: 3.3488, name: "Surulere, Lagos" },
        walletBalance: 38000,
        escrowBalance: 6600,
        sessionsCompleted: 71,
        responseTime: "8 min",
        bio: "Making Physics fun and understandable",
        mode: ["Home", "Online"],
      },
    ]

    // Store tutors
    localStorage.setItem("tutors", JSON.stringify(demoTutors))

    // Create demo parent
    const demoParent = {
      id: "parent-1",
      username: "parent_demo",
      role: "parent",
      walletBalance: 25000,
    }

    localStorage.setItem("demoParent", JSON.stringify(demoParent))

    // Create one active session for demo tutor
    const demoSession = {
      id: "session-1",
      tutorId: "tutor-1",
      tutorName: "Chidi Okafor",
      parentId: "parent-1",
      subject: "Mathematics",
      grade: "SS2",
      amount: 7000,
      status: "booked",
      date: new Date().toISOString(),
      mode: "Home",
      duration: "2 hours",
    }

    localStorage.setItem("sessions", JSON.stringify([demoSession]))
    localStorage.setItem("demoInitialized", "true")

    console.log("[v0] Demo mode initialized successfully")
    console.log("[v0] Demo credentials:")
    console.log("[v0] Parent: username=parent_demo, password=any")
    console.log("[v0] Tutor: Auto-loads chidi_math with ₦7,000 in escrow")
  } else {
    console.log("[v0] Demo mode already initialized")
  }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initializeDemoMode()
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
