import { permanentRedirect } from "next/navigation";

// /pricing has been retired — pricing now lives on the MyPageSEO service
// page itself. This issues a permanent (308) redirect so old links,
// bookmarks, and any indexed search results land in the right place.
export default function PricingPage() {
  permanentRedirect("/services/mypageseo");
}
