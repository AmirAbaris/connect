"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Shield,
  User,
  MapPin,
  Database,
  Lock,
  Mail,
  Eye,
  Globe,
  MessageCircle,
  Settings,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations();
  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Hero */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6">
            {t("Privacy.badge")}
            <Shield className="w-4 h-4 ml-2" />
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("Privacy.mainTitle")}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("Privacy.intro")}
          </p>
        </div>
        {/* Data Collection */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-primary" />
            {t("Privacy.dataCollectionTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  {t("Privacy.profileInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• {t("Privacy.profileInfoList1")}</p>
                  <p>• {t("Privacy.profileInfoList2")}</p>
                  <p>• {t("Privacy.profileInfoList3")}</p>
                  <p>• {t("Privacy.profileInfoList4")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  {t("Privacy.locationInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• {t("Privacy.locationInfoList1")}</p>
                  <p>• {t("Privacy.locationInfoList2")}</p>
                  <p>• {t("Privacy.locationInfoList3")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  {t("Privacy.accountInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• {t("Privacy.accountInfoList1")}</p>
                  <p>• {t("Privacy.accountInfoList2")}</p>
                  <p>• {t("Privacy.accountInfoList3")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  {t("Privacy.privacySettingsTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• {t("Privacy.privacySettingsList1")}</p>
                  <p>• {t("Privacy.privacySettingsList2")}</p>
                  <p>• {t("Privacy.privacySettingsList3")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-8" />
        {/* How We Use Data */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("Privacy.howWeUseDataTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  {t("Privacy.mapUsageTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Privacy.mapUsageDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  {t("Privacy.socialUsageTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Privacy.socialUsageDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  {t("Privacy.improvementUsageTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Privacy.improvementUsageDesc")}
                </p>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  {t("Privacy.securityUsageTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("Privacy.securityUsageDesc")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-8" />
        {/* Data Sharing */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("Privacy.dataSharingTitle")}
          </h2>

          <div className="bg-card/50 rounded-lg p-6 border border-border/50">
            <p className="text-muted-foreground mb-4">
              {t("Privacy.dataSharingIntro")}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm mb-1">
                    {t("Privacy.dataSharing1Title")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t("Privacy.dataSharing1Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm mb-1">
                    {t("Privacy.dataSharing2Title")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t("Privacy.dataSharing2Desc")}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm mb-1">
                    {t("Privacy.dataSharing3Title")}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t("Privacy.dataSharing3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        {/* User Rights */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {t("Privacy.userRightsTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  {t("Privacy.displayControlTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• {t("Privacy.displayControlList1")}</p>
                  <p>• {t("Privacy.displayControlList2")}</p>
                  <p>• {t("Privacy.displayControlList3")}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  {t("Privacy.manageInfoTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>• {t("Privacy.manageInfoList1")}</p>
                  <p>• {t("Privacy.manageInfoList2")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Separator className="my-8" />
        {/* Security & Retention */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              {t("Privacy.securityTitle")}
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm">• {t("Privacy.securityList1")}</p>
              <p className="text-sm">• {t("Privacy.securityList2")}</p>
              <p className="text-sm">• {t("Privacy.securityList3")}</p>
              <p className="text-sm">• {t("Privacy.securityList4")}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("Privacy.retentionTitle")}
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="text-sm">• {t("Privacy.retentionList1")}</p>
              <p className="text-sm">• {t("Privacy.retentionList2")}</p>
              <p className="text-sm">• {t("Privacy.retentionList3")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
