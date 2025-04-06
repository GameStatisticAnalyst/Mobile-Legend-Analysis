"use client";

import type React from "react";

import Button from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Textarea from "@/components/ui/text-area";
import Checkbox from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Separator from "@/components/ui/separator";
import { useState } from "react";
import { CheckCircle2, ChevronRight, Upload } from "lucide-react";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-10 pb-10 text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Thank you for applying to join our team of contributors. We'll
              review your application and get back to you within 5-7 business
              days.
            </p>
            <Button variant="outline">
              <a href="/">Return to Home</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Apply to Join Our Contributors
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Share your Mobile Legends expertise with our community and help
          players improve their game
        </p>
      </div>

      {/* Application Progress */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between">
          <div
            className={`text-center ${
              step >= 1
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                step >= 1
                  ? "bg-purple-100 dark:bg-purple-900"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <span className="font-bold">1</span>
            </div>
            <span className="text-sm">Personal Info</span>
          </div>
          <div
            className={`text-center ${
              step >= 2
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                step >= 2
                  ? "bg-purple-100 dark:bg-purple-900"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <span className="font-bold">2</span>
            </div>
            <span className="text-sm">Experience</span>
          </div>
          <div
            className={`text-center ${
              step >= 3
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                step >= 3
                  ? "bg-purple-100 dark:bg-purple-900"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <span className="font-bold">3</span>
            </div>
            <span className="text-sm">Sample Work</span>
          </div>
          <div
            className={`text-center ${
              step >= 4
                ? "text-purple-600 dark:text-purple-400"
                : "text-gray-400"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                step >= 4
                  ? "bg-purple-100 dark:bg-purple-900"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <span className="font-bold">4</span>
            </div>
            <span className="text-sm">Review</span>
          </div>
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full rounded-full"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-300"
            style={{ width: `${(step - 1) * 33.33}%` }}
          ></div>
        </div>
      </div>

      {/* Application Form */}
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>
            {step === 1 && "Personal Information"}
            {step === 2 && "Experience & Expertise"}
            {step === 3 && "Sample Work"}
            {step === 4 && "Review Your Application"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Tell us about yourself"}
            {step === 2 &&
              "Share your Mobile Legends experience and areas of expertise"}
            {step === 3 && "Upload or link to examples of your work"}
            {step === 4 && "Review your information before submitting"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="country">Country</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ph">Philippines</SelectItem>
                      <SelectItem value="id">Indonesia</SelectItem>
                      <SelectItem value="my">Malaysia</SelectItem>
                      <SelectItem value="sg">Singapore</SelectItem>
                      <SelectItem value="th">Thailand</SelectItem>
                      <SelectItem value="vn">Vietnam</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="bio">Brief Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us a bit about yourself (max 200 words)"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Next Step <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Experience & Expertise */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="mlExperience">
                    Mobile Legends Experience
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casual">
                        Casual Player (1-2 years)
                      </SelectItem>
                      <SelectItem value="experienced">
                        Experienced Player (2-4 years)
                      </SelectItem>
                      <SelectItem value="veteran">
                        Veteran Player (4+ years)
                      </SelectItem>
                      <SelectItem value="competitive">
                        Competitive Player
                      </SelectItem>
                      <SelectItem value="coach">Coach/Analyst</SelectItem>
                      <SelectItem value="pro">
                        Professional Player (Current/Former)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="rank">Current/Highest Rank</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your rank" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="warrior">Warrior</SelectItem>
                      <SelectItem value="elite">Elite</SelectItem>
                      <SelectItem value="master">Master</SelectItem>
                      <SelectItem value="grandmaster">Grandmaster</SelectItem>
                      <SelectItem value="epic">Epic</SelectItem>
                      <SelectItem value="legend">Legend</SelectItem>
                      <SelectItem value="mythic">Mythic</SelectItem>
                      <SelectItem value="mythical-glory">
                        Mythical Glory
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Areas of Expertise (Select all that apply)</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-draft" />
                      <label htmlFor="expertise-draft" className="text-sm">
                        Draft Analysis
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-meta" />
                      <label htmlFor="expertise-meta" className="text-sm">
                        Meta Analysis
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-hero" />
                      <label htmlFor="expertise-hero" className="text-sm">
                        Hero Guides
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-team" />
                      <label htmlFor="expertise-team" className="text-sm">
                        Team Analysis
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-tournament" />
                      <label htmlFor="expertise-tournament" className="text-sm">
                        Tournament Coverage
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-coaching" />
                      <label htmlFor="expertise-coaching" className="text-sm">
                        Coaching/Training
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-stats" />
                      <label htmlFor="expertise-stats" className="text-sm">
                        Statistical Analysis
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="expertise-content" />
                      <label htmlFor="expertise-content" className="text-sm">
                        Content Creation
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="experience">Relevant Experience</Label>
                  <Textarea
                    id="experience"
                    placeholder="Describe your experience with Mobile Legends analysis, content creation, or coaching"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="socialLinks">
                    Social Media/Content Links (Optional)
                  </Label>
                  <Textarea
                    id="socialLinks"
                    placeholder="YouTube, Twitch, Twitter, etc. (one link per line)"
                    className="min-h-[80px]"
                  />
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Next Step <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Sample Work */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="sampleTitle">Sample Analysis Title</Label>
                  <Input
                    id="sampleTitle"
                    placeholder="e.g., 'ONIC vs Blacklist: Draft Analysis'"
                    required
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="sampleContent">Sample Analysis Content</Label>
                  <Textarea
                    id="sampleContent"
                    placeholder="Provide a sample analysis (500-1000 words)"
                    className="min-h-[200px]"
                    required
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This helps us understand your analysis style and depth of
                    knowledge.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Label>Upload Additional Files (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      Drag and drop files here, or click to browse
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Supports: PDF, DOCX, JPG, PNG (Max 5MB)
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Label htmlFor="motivation">Why Do You Want to Join?</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Tell us why you want to become a contributor"
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2"
                  >
                    Next Step <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Personal Information
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm">
                      <span className="font-medium">Name:</span> John Doe
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Email:</span>{" "}
                      john.doe@example.com
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Country:</span> Philippines
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">
                    Experience & Expertise
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm">
                      <span className="font-medium">Experience Level:</span>{" "}
                      Veteran Player (4+ years)
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Rank:</span> Mythical Glory
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Areas of Expertise:</span>{" "}
                      Draft Analysis, Meta Analysis, Team Analysis
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Sample Work</h3>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm">
                      <span className="font-medium">Title:</span> ONIC vs
                      Blacklist: Draft Analysis
                    </p>
                    <p className="text-sm">
                      <span className="font-medium">Content:</span> [Preview of
                      first 100 characters...]
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="terms" required />
                  <label htmlFor="terms" className="text-sm">
                    I agree to the{" "}
                    <a
                      href="/terms-of-service"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="/privacy-policy"
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Submit Application
                  </Button>
                </div>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
