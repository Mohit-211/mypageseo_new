import {
  LocalPackIllustration,
  MobileGBPIllustration,
  GrowthCurveIllustration,
  HeatMapIllustration,
  ReviewWallIllustration,
  CitationNetworkIllustration,
  SearchResultIllustration,
  GBPHealthIllustration,
  CollaborationIllustration,
} from "@/components/illustrations";

/** Used in the top-of-page showcase (one illustration per service). */
export function ServiceShowcaseIllustration({ slug }: { slug: string }) {
  switch (slug) {
    case "mypageseo":
      return <GBPHealthIllustration />;
    case "mypageads":
      return <GrowthCurveIllustration />;
    case "mypagesmo":
      return <SearchResultIllustration query="downtown bakery" />;
    case "mypagereputation":
      return <ReviewWallIllustration />;
    case "mypagecontent":
      return <CitationNetworkIllustration />;
    case "mypagesites":
      return <MobileGBPIllustration />;
    default:
      return <LocalPackIllustration />;
  }
}

/** Used as the hero illustration inside each service's detail section. */
export function ServiceHeroIllustration({ slug }: { slug: string }) {
  switch (slug) {
    case "mypageseo":
      return <GBPHealthIllustration />;
    case "mypageads":
      return <GrowthCurveIllustration />;
    case "mypagesmo":
      return <SearchResultIllustration query="best coffee shop downtown" />;
    case "mypagereputation":
      return <ReviewWallIllustration />;
    case "mypagecontent":
      return <SearchResultIllustration query="plumber near me" />;
    case "mypagesites":
      return <MobileGBPIllustration />;
    default:
      return <GBPHealthIllustration />;
  }
}

/** Used as the secondary "in the wild" illustration inside each detail section. */
export function ServiceSecondaryIllustration({ slug }: { slug: string }) {
  switch (slug) {
    case "mypageseo":
      return <HeatMapIllustration />;
    case "mypageads":
      return <LocalPackIllustration />;
    case "mypagesmo":
      return <ReviewWallIllustration />;
    case "mypagereputation":
      return <CollaborationIllustration />;
    case "mypagecontent":
      return <CitationNetworkIllustration />;
    case "mypagesites":
      return <GrowthCurveIllustration />;
    default:
      return <CitationNetworkIllustration />;
  }
}
