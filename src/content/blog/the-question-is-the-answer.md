---
isDraft: true
title: The Question is the Answer
subtitle: The Future of LLMs is Information Gathering
description: ""
image:
    src: /src/assets/
    alt: ""
    caption: ""
    captionLink: ""
publishDate: "2024-07-31"
tags: []
recommended: []
---

## Notes

To expand on my idea a bit, currently I think most of the uses for LLMs are around answering questions (e.g. via RAG over a set of documents or a dataset). In this case, people have to curate documents that will make up the knowledge base for the LLMs. What if instead (or in addition), it was the job of an LLM to generate thoughtful questions that would help augment that knowledge base?

We're also getting to a point where data is extremely valuable. People training LLMs are running low on good quality data on which to train.

There are whole industries – e.g. consultancies like McKinsey – who spend significant time and resources on "information gathering." I think that's something an LLM could be doing instead.

LLMs could A) perform information gathering by asking thoughtful questions and B) work to categorize and curate that dataset / knowledge base.

I think most (if not all) companies have a good deal of valuable information that isn't codified anywhere – known as "tacit knowledge." That can lead to problems. Say for example Alice has to perform a business process like rotating credentials once a quarter but this is tacit knowledge and not written down anywhere. Let's think through some potential issues that could arise:
- Alice could forget to do it one quarter
- Alice could leave the company and no one knows to take over for him
- Bob might be doing the same thing without realizing it, wasting time and effort
- Bob might be doing something else that conflicts with Alice's work, without realizing it

Currently, the solution to this is pushing people to document their work and to communicate. That is, of course, not a bad thing but it requires a balance. You don't want people over-communicating – at which point there's too much noise and Alice might not see an email from Bob saying he's also rotating credentials – and you also don't want people spending too much time documenting. Documentation needs to be good – which is a skill that isn't a given – and good documentation takes time.

What if we could use an LLM to "interview" Alice (as well as Bob and everyone else), with the goal of discovering any tacit knowledge, curate the results, and flag any potential issues (e.g. "Alice quit and now no one is doing X" or "Alice and Bob appear to both be repeating the same effort").

As for technology, I think that's more of an implementation detail, at least for now.