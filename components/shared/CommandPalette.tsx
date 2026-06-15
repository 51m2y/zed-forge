"use client";

import { Command } from "cmdk";
import { ExternalLink, FileDown, FolderOpen, MessageCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";

const navItems = [
  ["Go to Work", "#work"],
  ["Go to Services", "#services"],
  ["Go to About", "#about"],
  ["Go to Contact", "#contact"]
] as const;

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const run = (action: () => void) => {
    setOpen(false);
    action();
  };

  return (
    <>
      {notice ? (
        <div className="fixed bottom-4 left-1/2 z-[100] -translate-x-1/2 rounded-full border border-ff-border bg-ff-surface px-4 py-2 text-sm text-ff-text">
          {notice}
        </div>
      ) : null}
      {open ? (
        <div className="fixed inset-0 z-[95] bg-black/60 p-4 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <Command
            className="mx-auto mt-24 max-w-xl overflow-hidden rounded-lg border border-ff-border bg-ff-surface text-ff-text shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-ff-border px-4">
              <Search size={18} className="text-ff-muted" />
              <Command.Input
                autoFocus
                placeholder="Search zed-forge..."
                className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-ff-muted"
              />
            </div>
            <Command.List className="max-h-96 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-ff-muted">No results found.</Command.Empty>
              <Command.Group heading="Navigation" className="text-xs text-ff-muted">
                {navItems.map(([label, href]) => (
                  <Command.Item
                    key={href}
                    onSelect={() => run(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-ff-text aria-selected:bg-ff-surface-2"
                  >
                    <FolderOpen size={16} /> {label}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Projects" className="text-xs text-ff-muted">
                {projects.map((project) => (
                  <Command.Item
                    key={project.slug}
                    onSelect={() => run(() => (window.location.href = `/work/${project.slug}`))}
                    className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-ff-text aria-selected:bg-ff-surface-2"
                  >
                    <ExternalLink size={16} /> View {project.name}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group heading="Actions" className="text-xs text-ff-muted">
                <Command.Item
                  onSelect={() => run(() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }))}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-ff-text aria-selected:bg-ff-surface-2"
                >
                  <MessageCircle size={16} /> Start a Project
                </Command.Item>
                <Command.Item
                  onSelect={() =>
                    run(() => {
                      setNotice("CV available on request");
                      window.setTimeout(() => setNotice(""), 2400);
                    })
                  }
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-ff-text aria-selected:bg-ff-surface-2"
                >
                  <FileDown size={16} /> Download CV
                </Command.Item>
                <Command.Item
                  onSelect={() => run(() => window.open("https://wa.me/260976034685", "_blank", "noopener"))}
                  className="flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-sm text-ff-text aria-selected:bg-ff-surface-2"
                >
                  <MessageCircle size={16} /> Open WhatsApp
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      ) : null}
    </>
  );
}
