---
title: Onshape ile Parametrik CAD
module_id: 50
updated: '2026-08-21'
summary: Learn parametric CAD in Onshape through an English-language lesson covering Documents, Part Studios, sketches, constraints, dimensions, Extrude, Fillet, Chamfer, assemblies, mates, and version history.
quiz: /uygulamalar/8-3-onshape-ile-parametrik-cad/
permalink: /dersler/8-3-onshape-ile-parametrik-cad/
---
<div class="lesson-goals" markdown="1">

**Lesson language: English**

In this lesson, you will use **Onshape** as a cloud-native parametric CAD system. You will learn the basic workflow **Document → Part Studio → Sketch → Dimension/Constraint → Feature → Assembly**, and you will understand why parametric models are easier to revise than geometry created without design intent.

</div>

<div class="archive-flow" aria-label="Onshape parametric CAD workflow"><span>Create Document</span><i>→</i><span>Sketch</span><i>→</i><span>Constrain & Dimension</span><i>→</i><span>Extrude / Fillet / Chamfer</span><i>→</i><span>Version & Assemble</span></div>

## 1. What is parametric CAD?

A **parametric model** is controlled by meaningful dimensions, constraints, and ordered features. Instead of drawing a shape once and treating it as fixed geometry, you define the relationships that describe the design.

For example, a rectangular plate can be controlled by:

- width = 80 mm,
- height = 50 mm,
- thickness = 8 mm,
- hole diameter = 10 mm,
- hole center constrained to the plate center.

If the width changes from 80 mm to 100 mm, a well-constructed parametric model updates predictably because its geometry follows dimensions and constraints.

Onshape describes feature-based parametric modeling as an ordered feature workflow such as **Sketch, Extrude, Fillet, Shell**, where changing dimensions or features updates downstream geometry.

## 2. Onshape documents and the main workspace

### Document

An Onshape **Document** is a cloud-based container that can include Part Studios, Assemblies, Drawings, and other tabs. Onshape is cloud-native, so teams can collaborate on a shared source of truth rather than exchanging many copies of CAD files.

### Part Studio

A **Part Studio** is where you create parts using sketches and features. A single Part Studio can contain one or more parts.

### Feature list

The feature list records the modeling sequence. A typical beginner model may contain:

1. Sketch 1
2. Extrude 1
3. Sketch 2
4. Extrude Remove
5. Fillet 1

Feature order matters because later features can depend on earlier geometry.

## 3. Sketches, constraints, and dimensions

A solid part usually begins with a 2D sketch on a plane or planar face.

### Basic sketch workflow

1. Click **Sketch**.
2. Select a plane, such as Top, Front, or Right.
3. Draw entities such as lines, rectangles, or circles.
4. Add **constraints** to define geometric relationships.
5. Add **dimensions** to define numerical size and position.
6. Accept the sketch with the checkmark.

### Constraints

Constraints describe relationships such as horizontal, vertical, coincident, tangent, concentric, equal, or perpendicular. Good constraints express **design intent**.

### Dimensions

Onshape's Dimension tool uses the **D** shortcut. A dimension controls values such as length, distance, angle, radius, or diameter. Avoid adding random dimensions just to stop geometry from moving; dimensions should explain how the part is intended to behave.

## 4. Extrude: turning a sketch into a 3D feature

The **Extrude** feature adds depth to a selected sketch region or planar face. Onshape currently supports result operations including:

- **New:** create a new part,
- **Add:** add material to an existing part,
- **Remove:** remove material,
- **Intersect:** keep material where geometry intersects.

A simple workflow:

1. Sketch an 80 mm × 50 mm rectangle.
2. Finish the sketch.
3. Click **Extrude** (`Shift+E`).
4. Select the closed sketch region.
5. Choose **New**.
6. Choose **Blind** end type.
7. Enter depth = 8 mm.
8. Accept the feature.

To create a hole, sketch a circle on the top face and use **Extrude → Remove** with an appropriate end condition such as **Through all**.

## 5. Fillet, Chamfer, and feature-based editing

### Fillet

A fillet rounds a sharp edge or sketch corner using a radius. Onshape's sketch Fillet can be started with **Shift+F**.

### Chamfer

A chamfer creates a beveled edge. In a sketch, Onshape supports chamfer definitions using distances and, depending on the mode, angle relationships.

### Why features are better than destructive edits

If the base plate dimension changes, downstream features can update automatically when references and design intent remain valid. This is the core benefit of parametric CAD: **edit the parameter or feature instead of rebuilding the model from scratch**.

## 6. Assemblies, Mate Connectors, and Versions

### Assemblies and Mates

In an Onshape Assembly, parts are positioned using **Mates**. Onshape Mate Connectors are local coordinate systems used to locate and orient instances relative to one another.

Examples of mate behavior include:

- **Fastened:** removes all relative degrees of freedom,
- **Revolute:** allows rotation about an axis,
- **Slider:** allows translation along an axis.

### Versions and history

Onshape automatically records edit history. The **Versions and history** panel lets you create named, view-only versions and branch from versions into new workspaces. This is different from simply renaming a copied CAD file.

A version is useful when you want a stable reference point such as `Prototype v1` before experimenting with a major design change.

## 7. Guided practice: create a parametric mounting plate

<div class="practice-panel" markdown="1">

1. Create a new Onshape **Document** named `BILSEM Parametric Plate`.
2. Open the default **Part Studio** and create a sketch on the **Top plane**.
3. Draw a center rectangle or a rectangle whose location is constrained to the origin.
4. Dimension the plate to **80 mm × 50 mm**.
5. Finish the sketch and **Extrude** it to **8 mm** as a **New** solid.
6. Select the top face and create a second sketch.
7. Draw one **10 mm diameter** circle and constrain its center using meaningful dimensions or symmetry/center relationships.
8. Use **Extrude → Remove → Through all** to create the hole.
9. Add a small edge **Fillet** where appropriate.
10. Change the plate width from 80 mm to **100 mm** and observe which downstream features update.
11. Open **Versions and history** and create a named version called `Plate v1` after the model is correct.
12. Explain which dimensions and constraints express the design intent of your model.

</div>

## 8. Common mistakes and lesson summary

<div class="mistake-panel" markdown="1">

- Treating a sketch as finished because it looks correct, without checking constraints and dimensions.
- Adding many arbitrary dimensions instead of expressing design intent.
- Confusing **Extrude Add** with **Extrude Remove**.
- Using **Blind** when the design requires a hole to go **Through all**.
- Editing geometry destructively instead of changing the controlling sketch or feature.
- Ignoring feature order and broken references after a major upstream change.
- Confusing a workspace history entry with a named, view-only **Version**.
- Using the wrong Mate type in an Assembly and accidentally allowing or blocking motion.

</div>

**By the end of this lesson:** you should be able to explain parametric modeling, create and dimension a sketch, use Extrude to add/remove material, apply basic Fillet/Chamfer operations, understand feature order, and describe how Onshape uses Mates and Versions/History.

<details class="source-note"><summary>Source verification</summary><p>This lesson was checked on August 21, 2026 against current Onshape Help and official Onshape resources for Sketch basics, Dimension, Extrude, Fillet, Chamfer, Mate Connectors, Mates, and Versions and History.</p><ul><li><a href="https://cad.onshape.com/help/Content/sketch_basics.htm">Onshape Sketch Basics</a></li><li><a href="https://cad.onshape.com/help/Content/Sketch/dimension.htm">Onshape Dimension</a></li><li><a href="https://cad.onshape.com/help/Content/PartStudio/extrude.htm">Onshape Extrude</a></li><li><a href="https://cad.onshape.com/help/Content/Assembly/assembly_mate_connector.htm">Mate Connector</a></li><li><a href="https://cad.onshape.com/help/Content/Document/versions_and_history.htm">Versions and History</a></li></ul></details>
