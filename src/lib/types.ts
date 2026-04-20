export interface ComparisonData {
  slug: string;
  title: string;
  description: string;
  category: string;
  tools: ComparisonTool[];
  featureLabels: Record<string, string>;
  winner: string;
  verdict: string;
}

export interface ComparisonTool {
  id: string;
  name: string;
  rating: number;
  price: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  features: Record<string, string | boolean>;
}

export interface ToolReview {
  id: string;
  name: string;
  slug: string;
  category: string;
  rating: number;
  price: string;
  description: string;
  pros: string[];
  cons: string[];
  verdict: string;
  affiliateId: string;
}
