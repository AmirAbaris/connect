"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Shield, User, MapPin, Database, Lock, Mail } from "lucide-react";
import { useTranslations } from "next-intl";

export default function TermsPage() {
  const t = useTranslations();
  const lastUpdated = t("Terms.lastUpdated", {
    date: new Date().toLocaleDateString("fa-IR"),
  });
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            {t("Terms.badge")}
            <Shield className="w-4 h-4 ml-2" />
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("Terms.mainTitle")}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lastUpdated}
          </p>
        </div>

        {/* Data Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-primary" />
            {t("Terms.dataCollectionTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  {t("Terms.accountInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Terms.accountInfoDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  {t("Terms.profileInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Terms.profileInfoDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  {t("Terms.authInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Terms.authInfoDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {t("Terms.mapInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Terms.mapInfoDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8" />

        {/* How We Use Data */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("Terms.howWeUseDataTitle")}
          </h2>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>{t("Terms.howWeUseDataList1")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>{t("Terms.howWeUseDataList2")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>{t("Terms.howWeUseDataList3")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>{t("Terms.howWeUseDataList4")}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <p>{t("Terms.howWeUseDataList5")}</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Data Sharing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("Terms.dataSharingTitle")}
          </h2>

          <div className="bg-card/50 rounded-lg p-6 border border-border/50">
            <p className="text-muted-foreground">
              {t("Terms.dataSharingDesc")}
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Security & Rights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              {t("Terms.securityTitle")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("Terms.securityDesc")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("Terms.yourRightsTitle")}
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm">{t("Terms.yourRightsListIntro")}</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm">{t("Terms.yourRightsList1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Retention & Changes */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("Terms.retentionTitle")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("Terms.retentionDesc")}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("Terms.changesTitle")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("Terms.changesDesc")}
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6 my-10 text-center">
          <h2 className="text-xl font-bold mb-2 text-destructive">
            {t("Terms.disclaimerTitle")}
          </h2>
          <p className="text-destructive text-sm leading-relaxed">
            {t("Terms.disclaimerDesc")}
          </p>
        </div>
      </div>
    </div>
  );
}
