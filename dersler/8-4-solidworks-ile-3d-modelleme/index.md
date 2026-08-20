---
title: SOLIDWORKS ile 3D Modelleme
module_id: 51
updated: '2026-08-21'
summary: Learn the English SOLIDWORKS 2026 interface and a core 3D part-modeling workflow using Part documents, sketches, Smart Dimension, relations, Extruded Boss/Base, Extruded Cut, Fillet, Chamfer, and the FeatureManager design tree.
quiz: /uygulamalar/8-4-solidworks-ile-3d-modelleme/
permalink: /dersler/8-4-solidworks-ile-3d-modelleme/
---
<div class="lesson-goals" markdown="1">

**Lesson language: English — SOLIDWORKS 2026 terminology**

In this lesson, you will learn a beginner **SOLIDWORKS 2026** part-modeling workflow using the English interface. The goal is not to memorize every command. The goal is to understand the stable CAD sequence **New Part → Sketch → Relations & Smart Dimension → Feature → Inspect → Edit**.

</div>

<div class="archive-flow" aria-label="SOLIDWORKS 3D modeling workflow"><span>New Part</span><i>→</i><span>Choose Plane</span><i>→</i><span>Sketch & Dimension</span><i>→</i><span>Extruded Boss/Base</span><i>→</i><span>Cut / Fillet / Chamfer</span></div>

## 1. The SOLIDWORKS interface

SOLIDWORKS 2026 identifies several main interface areas:

- **Menu Bar:** traditional menus and commands.
- **CommandManager:** context-sensitive tabs such as Features and Sketch.
- **FeatureManager Design Tree:** shows sketches and features in creation order.
- **PropertyManager:** displays settings for the active tool or feature.
- **Graphics Area:** the main space where you create and inspect geometry.
- **Heads-up View Toolbar:** common view and display controls.
- **Task Pane:** additional resources and tools.

The **FeatureManager Design Tree** is especially important. It is not just a file list; it represents the feature history and dependencies of the model.

## 2. Start a Part and create the first sketch

### New Part

1. Click **New**.
2. Choose **Part**.
3. Select a default plane: **Front Plane**, **Top Plane**, or **Right Plane**.
4. Click **Sketch**, or start with a feature such as **Extruded Boss/Base**, which can prompt you to choose a sketch plane.

A sketch is the basis for many 3D features. SOLIDWORKS Help states that in a new part, you normally begin with a sketch on a default or created plane.

### Sketch entities

Typical beginner entities include:

- Line
- Centerline
- Rectangle
- Circle
- Arc

Use the origin and geometric relations intentionally. A rectangle that merely looks centered is not the same as a rectangle constrained to the origin.

## 3. Sketch relations and Smart Dimension

A robust sketch combines **relations** and **dimensions**.

### Relations

Examples include:

- Horizontal
- Vertical
- Coincident
- Concentric
- Tangent
- Equal
- Parallel / Perpendicular

Relations define geometric behavior. Dimensions define numerical size and position.

### Smart Dimension

SOLIDWORKS uses **Smart Dimension** to add dimensions to sketch entities. The type of dimension depends on what you select: a line length, distance between points, angle, radius, or diameter.

Good practice is to dimension according to **design intent**. For example, if a hole must stay 12 mm from an edge, dimension that relationship directly instead of guessing its position.

## 4. Extruded Boss/Base: creating the base solid

**Extruded Boss/Base** adds material from a closed sketch profile.

Example workflow:

1. On the Front Plane, sketch a rectangle starting at the origin.
2. Use Smart Dimension to set it to **80 mm × 50 mm**.
3. Exit the sketch.
4. Click **Features → Extruded Boss/Base**.
5. In the PropertyManager, set **End Condition = Blind**.
6. Set **Depth = 8 mm**.
7. Click the green checkmark.

The new feature appears in the FeatureManager Design Tree. If you later edit the sketch dimensions or extrusion depth, the model rebuilds using the new parameters.

## 5. Extruded Cut, Fillet, and Chamfer

### Extruded Cut

**Extruded Cut** removes material using a sketch profile. A common beginner workflow is:

1. Select a planar face.
2. Start a sketch.
3. Draw and dimension a circle.
4. Exit the sketch.
5. Use **Extruded Cut**.
6. Choose an end condition such as **Through All** when the hole should pass completely through the part.

### Fillet

A **Fillet** rounds selected model edges. Enter an appropriate radius in the PropertyManager and preview the result before accepting it.

### Chamfer

A **Chamfer** creates a beveled edge. Do not confuse a Fillet with a Chamfer: a Fillet creates a rounded transition, while a Chamfer creates a flat bevel.

## 6. Feature order, rebuilds, and safe editing

### Feature order matters

A later feature can depend on the geometry created by an earlier feature. If you delete or drastically change an early sketch/feature, downstream features may fail to rebuild.

### Edit the controlling feature

If you want to change the base thickness from 8 mm to 12 mm, edit the **Boss-Extrude** feature rather than trying to manually move random faces without understanding the model history.

### PropertyManager and confirmation

Most sketch and feature tools open a **PropertyManager** in the left pane. Review the preview and values, then accept with the green checkmark. Use the red X to cancel when the setup is wrong.

### Save intentionally

SOLIDWORKS is a desktop CAD application. Save your work intentionally and use the file/folder structure defined by your school. A Part document is typically saved as an `.SLDPRT` file.

## 7. Guided practice: build a simple mounting plate

<div class="practice-panel" markdown="1">

1. Create a **New Part**.
2. Select the **Front Plane** and start a **Sketch**.
3. Draw a rectangle and use **Smart Dimension** to set it to **80 mm × 50 mm**.
4. Constrain the sketch location using the origin and appropriate relations/dimensions.
5. Exit the sketch and create an **Extruded Boss/Base** with **Blind, 8 mm** depth.
6. Select the front face and start a new sketch.
7. Draw a **10 mm diameter** circle and locate it with meaningful dimensions.
8. Use **Extruded Cut → Through All** to create a hole.
9. Select suitable outside edges and add a small **Fillet**.
10. Add a **Chamfer** to one different edge and compare the geometry with the Fillet.
11. In the **FeatureManager Design Tree**, identify the base sketch, Boss-Extrude, cut sketch, Cut-Extrude, Fillet, and Chamfer.
12. Edit the base width from 80 mm to 100 mm, rebuild if needed, and check whether the hole and edge features still behave as intended.

</div>

## 8. Common mistakes and lesson summary

<div class="mistake-panel" markdown="1">

- Sketching on the wrong plane or face.
- Using approximate mouse placement when a dimension or relation should control the geometry.
- Creating an open sketch when the selected solid feature requires a closed profile.
- Confusing **Extruded Boss/Base** (adds material) with **Extruded Cut** (removes material).
- Choosing **Blind** for a hole that should be **Through All**.
- Confusing **Fillet** and **Chamfer**.
- Ignoring the FeatureManager Design Tree and deleting an upstream feature without checking dependencies.
- Assuming a model is correct just because it rebuilds; dimensions and design intent must still be verified.

</div>

**By the end of this lesson:** you should be able to identify the core SOLIDWORKS interface areas, create and dimension a sketch, use Extruded Boss/Base and Extruded Cut, distinguish Fillet from Chamfer, and explain how the FeatureManager design tree represents feature history.

<details class="source-note"><summary>Source verification</summary><p>This lesson was checked on August 21, 2026 against SOLIDWORKS Design Help 2026 for the user interface, Manager Pane, Sketch, Smart Dimension, Extruded Boss/Base, Extruded Cut, Fillet/Chamfer tools, and the official 2026 beginner tutorials.</p><ul><li><a href="https://help.solidworks.com/2026/English/SolidWorks/sldworks/c_user_interface_overview.htm">User Interface Overview</a></li><li><a href="https://help.solidworks.com/2026/English/SolidWorks/sldworks/c_management_panel.htm">Manager Pane</a></li><li><a href="https://help.solidworks.com/2026/english/SolidWorks/sldworks/t_Dimensioning_a_2D_Sketch.htm">Dimensioning a 2D Sketch</a></li><li><a href="https://help.solidworks.com/2026/english/solidworks/sldworks/t_sketching_bosses_bases.htm">Sketching with Extruded or Revolved Bosses/Bases</a></li><li><a href="https://help.solidworks.com/2026/English/SolidWorks/sldworks/r_extrude_propertymanager.htm">Extrude PropertyManager</a></li></ul></details>
