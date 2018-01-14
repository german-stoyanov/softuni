package com.softuni.controller;

import com.softuni.models.Calculator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {
	@GetMapping("/")
	public String index(Model model) {
			model.addAttribute("operator", "+");
			model.addAttribute("view", "views/calculatorForm");
		return "base-layout";
	}

	@PostMapping("/")
	public String Calculator(
			@RequestParam String leftOperand,
			@RequestParam String operator,
			@RequestParam String rightOperand,
			Model model
	) {
		model.addAttribute("view", "views/calculatorForm");

		int leftNumber;
		int rightNumber;

		try {
			leftNumber = Integer.parseInt(leftOperand);
		}
		catch (NumberFormatException ex) {
			leftNumber = 0;
		}

		try {
			rightNumber = Integer.parseInt(rightOperand);
		}
		catch (NumberFormatException ex) {
			rightNumber = 0;
		}

		Calculator calculator = new Calculator(leftNumber, operator, rightNumber);
		int result = calculator.calculateResult();

		model.addAttribute("leftOperand", leftNumber);
		model.addAttribute("rightOperand", rightNumber);
		model.addAttribute("operator", operator);
		model.addAttribute("result", result);

		return "base-layout";
	}
}
