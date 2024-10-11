"use client";
import { useParams, usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import useExtractUrlSegment from "@/hooks/useExtractUrlSegment";
import axios from "axios";

const SubjectPage = () => {
  const [exam, setExam] = useState<string>("");
  const pathname: string = usePathname();

  const segment = useExtractUrlSegment(pathname, 1);
  useEffect(() => {
    if (segment) {
      setExam(segment); // Set the extracted segment in state
    }
  }, [segment, pathname]);

  useEffect(() => {
    // Make API call to return a list of all topics within subject and level
    const fetchData = async () => {
      if (exam) {
        try {
          const response = await axios.get(`/api/exam/subject/level`); // this will be dynamic later
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchData();
  }, [exam]);
  return (
    <div className="p-2">
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          <Table>
            <TableCaption>All </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CollapsibleContent>
      </Collapsible>

      {/* Topics Summay Div */}
      <section className="">
        <article>
          <h2>Topics</h2>
        </article>
      </section>

      {/* Other stuff */}
      <section></section>
    </div>
  );
};

export default SubjectPage;
