// import { NextResponse } from "next/server";
// import puppeteer from "puppeteer";

// export async function POST(request: Request) {
//   try {
//     const { url } = await request.json();

//     if (!url) {
//       return NextResponse.json({ error: "URL is required" }, { status: 400 });
//     }

//     // Launch browser
//     const browser = await puppeteer.launch({
//       headless: "new",
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });

//     try {
//       const page = await browser.newPage();

//       // Set viewport size
//       await page.setViewport({
//         width: 1920,
//         height: 1080,
//         deviceScaleFactor: 1,
//       });

//       // Navigate to URL with timeout
//       await page.goto(url, {
//         waitUntil: "networkidle0",
//         timeout: 100000,
//       });

//       // Capture screenshot
//       const screenshot = await page.screenshot({
//         type: "png",
//         encoding: "base64",
//         fullPage: false,
//       });

//       await browser.close();

//       return NextResponse.json({
//         success: true,
//         screenshot: `data:image/png;base64,${screenshot}`,
//       });
//     } catch (error) {
//       await browser.close();
//       throw error;
//     }
//   } catch (error) {
//     console.error("Screenshot error:", error);
//     return NextResponse.json(
//       { error: "Failed to capture screenshot" },
//       { status: 500 },
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import puppeteer from "puppeteer";

// export async function POST(request: Request) {
//   let browser;

//   try {
//     const { url } = await request.json();

//     if (!url) {
//       return NextResponse.json({ error: "URL is required" }, { status: 400 });
//     }

//     console.log("Launching browser...");
//     // Launch browser with local-optimized settings
//     browser = await puppeteer.launch({
//       headless: "new",
//       args: [
//         "--no-sandbox",
//         "--disable-setuid-sandbox",
//         "--disable-dev-shm-usage",
//       ],
//       timeout: 60000, // 60 seconds for browser launch
//     });

//     console.log("Browser launched, opening new page...");
//     const page = await browser.newPage();

//     // Optimize page loading by blocking unnecessary resources
//     await page.setRequestInterception(true);
//     page.on("request", (req) => {
//       const resourceType = req.resourceType();
//       if (
//         ["image", "stylesheet", "font", "media", "script"].includes(
//           resourceType,
//         )
//       ) {
//         req.abort();
//       } else {
//         req.continue();
//       }
//     });

//     // Set viewport size
//     await page.setViewport({
//       width: 1920,
//       height: 1080,
//       deviceScaleFactor: 1,
//     });

//     console.log(`Navigating to ${url}...`);
//     // Navigate with reduced strictness and timeout handling
//     try {
//       await page.goto(url, {
//         waitUntil: "domcontentloaded", // Wait for HTML only
//         timeout: 30000, // 30 seconds timeout
//       });
//     } catch (gotoError) {
//       console.warn(
//         "Navigation timeout, proceeding with partial load:",
//         gotoError,
//       );
//     }

//     console.log("Taking screenshot...");
//     // Capture screenshot
//     const screenshot = await page.screenshot({
//       type: "png",
//       encoding: "base64",
//       fullPage: false,
//     });

//     console.log("Closing browser...");
//     await browser.close();

//     return NextResponse.json({
//       success: true,
//       screenshot: `data:image/png;base64,${screenshot}`,
//     });
//   } catch (error) {
//     console.error("Screenshot error:", error);
//     if (browser) {
//       await browser.close();
//     }
//     return NextResponse.json(
//       { error: "Failed to capture screenshot", details: error.message },
//       { status: 500 },
//     );
//   }
// }

// import { NextResponse } from "next/server";
// import puppeteer from "puppeteer";

// export async function POST(request: Request) {
//   let browser;

//   try {
//     const { url } = await request.json();
//     if (!url) {
//       return NextResponse.json({ error: "URL is required" }, { status: 400 });
//     }

//     console.log("Launching browser...");
//     browser = await puppeteer.launch({
//       headless: "new",
//       args: [
//         "--no-sandbox",
//         "--disable-setuid-sandbox",
//         "--disable-dev-shm-usage",
//       ],
//       timeout: 90000, // 90 seconds for browser launch
//     });

//     console.log("Browser launched, opening new page...");
//     const page = await browser.newPage();

//     // Set viewport for high-resolution capture
//     await page.setViewport({
//       width: 1920,
//       height: 1080,
//       deviceScaleFactor: 1,
//     });

//     console.log(`Navigating to ${url}...`);
//     let navigationSuccess = false;

//     try {
//       await page.goto(url, { waitUntil: "load", timeout: 60000 }); // Full page load
//       navigationSuccess = true;
//     } catch (error) {
//       console.warn("First navigation attempt failed, retrying...");
//       try {
//         await page.goto(url, { waitUntil: "load", timeout: 90000 }); // Retry with more time
//         navigationSuccess = true;
//       } catch (retryError) {
//         console.error("Navigation failed even after retry:", retryError);
//       }
//     }

//     if (!navigationSuccess) {
//       throw new Error("Failed to load the page after multiple attempts");
//     }

//     console.log("Waiting for network to be idle...");
//     await page.waitForNetworkIdle({ idleTime: 500, timeout: 30000 }); // Ensures all resources are loaded

//     console.log("Taking screenshot...");
//     const screenshot = await page.screenshot({
//       type: "png",
//       encoding: "base64",
//       fullPage: true,
//     });

//     console.log("Closing browser...");
//     await browser.close();

//     return NextResponse.json({
//       success: true,
//       screenshot: `data:image/png;base64,${screenshot}`,
//     });
//   } catch (error) {
//     console.error("Screenshot error:", error);
//     if (browser) {
//       await browser.close();
//     }
//     return NextResponse.json(
//       { error: "Failed to capture screenshot", details: error.message },
//       { status: 500 },
//     );
//   }
// }

import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(request: Request) {
  let browser;

  try {
    const { url } = await request.json();
    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    console.log("Launching browser...");
    browser = await puppeteer.launch({
      headless: "new",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
      ],
      timeout: 90000,
    });

    console.log("Browser launched, opening new page...");
    const page = await browser.newPage();

    // Set viewport for high-resolution capture
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    console.log(`Navigating to ${url}...`);
    let navigationSuccess = false;

    try {
      await page.goto(url, { waitUntil: "load", timeout: 60000 });
      navigationSuccess = true;
    } catch (error) {
      console.warn("First navigation attempt failed, retrying...", error);
      try {
        await page.goto(url, { waitUntil: "load", timeout: 90000 });
        navigationSuccess = true;
      } catch (retryError) {
        console.error("Navigation failed even after retry:", retryError);
      }
    }

    if (!navigationSuccess) {
      throw new Error("Failed to load the page after multiple attempts");
    }

    console.log("Waiting for network to be idle...");
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 30000 });

    console.log("Taking viewport screenshot...");
    const screenshot = await page.screenshot({
      type: "png",
      encoding: "base64",
    });

    console.log("Closing browser...");
    await browser.close();

    return NextResponse.json({
      success: true,
      screenshot: `data:image/png;base64,${screenshot}`,
    });
  } catch (error) {
    console.error("Screenshot error:", error);
    if (browser) {
      await browser.close();
    }
    return NextResponse.json(
      { error: "Failed to capture screenshot", details: error.message },
      { status: 500 },
    );
  }
}
