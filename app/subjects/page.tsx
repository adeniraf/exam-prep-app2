"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";

import React, { useState, useEffect } from "react";
import { juniorCertSubjectsData, leavingCertSubjectsData } from "@/lib/data";
import SubjectSummary from "./components/SubjectSummary";

type Subject = {
  subject: string; // The name of the subject
  mandatory: boolean; // Indicates if the subject is mandatory
  levels: string[]; // Array of levels available for the subject
};

const Subjects = () => {
  const [leavingCertSubjects, setLeavingCertSubjects] = useState<Subject[]>([]);

  const [juniorCertSubjects, setJuniorCertSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    leavingCertSubjectsData.sort((a, b) => a.subject.localeCompare(b.subject));
    juniorCertSubjectsData.sort((a, b) => a.subject.localeCompare(b.subject));
    setLeavingCertSubjects(leavingCertSubjectsData);
    setJuniorCertSubjects(juniorCertSubjectsData);
  }, []);
  return (
    <section className="flex px-4 flex-wrap gap-4 items-center justify-center md:flex-row">
      <Tabs defaultValue="leaving-certificate" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="leaving-certificate">
            Leaving Certificate
          </TabsTrigger>
          <TabsTrigger value="junior-certificate">
            Junior Certificate
          </TabsTrigger>
        </TabsList>
        {/* <Skeleton className="border px-4 py-2 flex-1 min-w-72 rounded-lg hover:shadow-lg" /> */}

        <TabsContent value="leaving-certificate">
          {leavingCertSubjects.map((i) => (
            <SubjectSummary
              key={i.subject}
              title={i.subject}
              mandatory={i.mandatory}
              levels={i.levels}
            />
          ))}
        </TabsContent>
        <TabsContent value="junior-certificate">
          {juniorCertSubjects.map((i) => (
            <SubjectSummary
              key={i.subject}
              title={i.subject}
              mandatory={i.mandatory}
              levels={i.levels}
            />
          ))}
        </TabsContent>
      </Tabs>
      {/* 
      {leavingCertSubjects.map((i) => (
        <SubjectSummary
          key={i.subject}
          title={i.subject}
          mandatory={i.mandatory}
          levels={i.levels}
        />
      ))} */}
    </section>
  );
};

export default Subjects;
